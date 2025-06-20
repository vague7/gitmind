import { headers } from 'next/headers';
import {NextRequest, NextResponse} from 'next/server';
import Stripe from 'stripe';
import { db } from '@/server/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-05-28.basil'
});

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = (await headers()).get('Stripe-Signature')!;
    let event : Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
        console.log("Error stripe post", err);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    console.log("Stripe", event.type);

    if (event.type === 'checkout.session.completed') {
        const credits = Number(session.metadata?.credits);
        const userId = session.client_reference_id;

        if (!userId || !credits) return NextResponse.json({ error: 'Missing userId or credits' }, { status: 400 });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        await db.stripeTransaction.create({
            data: {
                userId,
                credits
            }
        });

        await db.user.update({
            where: {
                id: userId
            },
            data: {
                credits: {
                    increment: credits
                }
            }
        });

        return NextResponse.json({
            message: 'Credits added successfully'
        }, { status: 200 });
    }

    return NextResponse.json({ message: 'Hello stripe' });
}
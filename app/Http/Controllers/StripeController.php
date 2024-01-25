<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Event;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function handleWebhook(Request $request)
    {
        $payload = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');
        $endpointSecret = config('services.stripe.webhook_secret'); 

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, $sigHeader, $endpointSecret
            );
        } catch (\Exception $e) {
            
            return response()->json(['error' => 'Webhook signature verification failed.'], 403);
        }

        switch ($event->type) {
            case 'payment_intent.succeeded':
                $this->handlePaymentSucceeded($event->data->object);
                break;

            case 'payment_intent.payment_failed':
                $this->handlePaymentFailed($event->data->object);
                break;
        }

        return response()->json(['status' => 'success']);
    }

    private function handlePaymentSucceeded($paymentIntent)
    {
        
        $paymentId = $paymentIntent->id;
        $amountReceived = $paymentIntent->amount_received;
        $currency = $paymentIntent->currency;

    }

    private function handlePaymentFailed($paymentIntent)
    {
        
        $paymentId = $paymentIntent->id;
        $failureMessage = $paymentIntent->last_payment_error ? $paymentIntent->last_payment_error->message : 'Unknown failure reason';

        
    }
}

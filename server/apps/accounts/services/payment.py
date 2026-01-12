from django.contrib.auth.models import User
from ..models.entities import Plan
import stripe
from ....config.settings.base import STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

# Set Stripe API key
stripe.api_key = STRIPE_SECRET_KEY

# For verifying my user
def verifyuser(user):
    try:
        user = User.objects.get(username = user)
    except User.DoesNotExist:
        return ValidationError("User now found. Please, Try again later!!!")
    user.is_active = True
    user.save()
    return user

# Stripe Payment Logic
def create_plan_payment(plantype):
    lineitems = [
        {
            "price_data": {
                "currency": "usd",
                "unit_amount": int(plantype["price"] * 100),
                "product_data": {
                    "name": plantype["name"],
                    "description": [plantype["type"], plantype["description"]],
                },
            },
            "quantity": 1,
        },
    ]
    session = stripe.checkout.Session.create(
        ui_mode="custom",
        line_items=lineitems,
        mode="payment",
        success_url="https://i.pinimg.com/736x/e6/df/e5/e6dfe5d171630e764b73a0c1192d1265.jpg",
        cancel_url="https://i.pinimg.com/1200x/76/e0/86/76e086304ed8b5411cc1c64d47da9c1d.jpg",
    )
    user = verifyuser(plantype['Users_name'])
    Plan.objects.create(
        Users_name = user.username,
        Subscription_type = plantype['type'],
        Price = plantype['price'],
        Paid = True
    )
    return Response({'url':session.url})

import json

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token


@ensure_csrf_cookie
def csrf_view(request):
    token = get_token(request)

    return JsonResponse({
        "csrfToken": token
    })


def login_view(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "Método não permitido."},
            status=405,
        )

    data = json.loads(request.body)

    username = data.get("username")
    password = data.get("password")

    user = authenticate(
        request,
        username=username,
        password=password,
    )

    if user is None:
        return JsonResponse(
            {"error": "Usuário ou senha incorretos."},
            status=401,
        )

    login(request, user)

    return JsonResponse({
        "message": "Login realizado com sucesso.",
        "username": user.username,
    })


def me_view(request):
    if not request.user.is_authenticated:
        return JsonResponse(
            {"authenticated": False},
            status=401,
        )

    return JsonResponse({
        "authenticated": True,
        "username": request.user.username,
    })
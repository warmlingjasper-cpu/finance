from django.urls import path

from .views import csrf_view, login_view, me_view


urlpatterns = [
    path("csrf/", csrf_view, name="csrf"),
    path("login/", login_view, name="login"),
    path("me/", me_view, name="me"),
    path(
        "api/reset-admin-password/",
        reset_admin_password
    ),
]
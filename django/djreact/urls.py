from django.conf.urls import url
from django.views import generic
from djreact.views import my_image

urlpatterns = [
  url(r'^url/(?P<url>.+)/', my_image,name= 'myimage'),
  url(r'^$',
      generic.TemplateView.as_view(template_name='view.html')),
]

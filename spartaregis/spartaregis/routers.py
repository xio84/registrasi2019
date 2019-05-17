from rest_framework import routers
from students.viewsets import StudentViewSet
#from article.viewsets import ArticleViewSet

router = routers.DefaultRouter()

router.register(r'students', StudentViewSet)
#router.register(r'article', ArticleViewSet)
from django.urls import path
from . import views

urlpatterns = [
    path('accounts/', views.accounts, name='accounts'),
    path('save_accounts/', views.save_accounts, name='save_accounts'),
    path('detail_accounts/<int:accounts_id>/', views.detail_accounts, name='detail_accounts'),
    path('update_accounts/<int:accounts_id>/', views.update_accounts, name='update_accounts'),
    path('delete_accounts/<int:accounts_id>/', views.delete_accounts, name='delete_accounts'),


    path('comments/', views.comments, name='comments'),
    path('save_comments/', views.save_comments, name='save_comments'),
    path('detail_comments/<int:comments_id>/', views.detail_comments, name='detail_comments'),
    path('update_comments/<int:comments_id>/', views.update_comments, name='update_comments'),
    path('delete_comments/<int:comments_id>/', views.delete_comments, name='delete_comments'),


    path('polls/', views.polls, name='polls'),
    path('save_polls/', views.save_polls, name='save_polls'),
    path('detail_polls/<int:polls_id>/', views.detail_polls, name='detail_polls'),
    path('update_polls/<int:polls_id>/', views.update_polls, name='update_polls'),
    path('delete_polls/<int:polls_id>/', views.delete_polls, name='delete_polls'),


    path('tweets/', views.tweets, name='tweets'),
    path('save_tweets/', views.save_tweets, name='save_tweets'),
    path('detail_tweets/<int:tweets_id>/', views.detail_tweets, name='detail_tweets'),
    path('update_tweets/<int:tweets_id>/', views.update_tweets, name='update_tweets'),
    path('delete_tweets/<int:tweets_id>/', views.delete_tweets, name='delete_tweets'),


    path('likes/', views.likes, name='likes'),
    path('likes_tweets/', views.likes_tweets, name='likes_tweets'),
    path('like_tweet/<int:accounts_id>/', views.like_tweet, name='like_tweet'),


    path('retweets/', views.retweets, name='retweets'),
    path('search_retweet/', views.search_retweet, name='search_retweet'),
    path('like_retweet/<int:accounts_id>/', views.like_retweet, name='like_retweet'),


    path('follows_acounts/', views.follows_acounts, name='follows_acounts'),
    path('follow_acount/<int:accounts_id>/', views.follow_acount, name='follow_acount'),


    path('comments_tweets/', views.comments_tweets, name='comments_tweets'),
]
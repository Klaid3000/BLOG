Области хранения данных:

-   база данныхна json-server
-   BFF
-   Redux-store

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего пользователя), редакс сторе (отобрадение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя), редакс сторе (использование на клиенте роли пользователя)
-   статья: БД (список статей), редакс сторе (отобрадение в браузере)
-   комментарий: БД (список коментариев), редакс сторе (отображение в браузере)

Таблицы БД:

-   Пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для Redux-store (на клиенте):

-   user: id / login / roleId / session
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-   users: массив user: id / login / registeredAt / role

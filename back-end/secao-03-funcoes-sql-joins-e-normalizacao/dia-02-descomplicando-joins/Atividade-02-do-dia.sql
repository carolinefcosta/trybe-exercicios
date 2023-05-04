🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em
cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM pixar.movies m
INNER JOIN pixar.box_office b
ON m.id = b.movie_id
WHERE b.rating > 8
AND m.theater_id IS NOT NULL;

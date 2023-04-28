Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados pixar.
Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de
400 milhões no mercado interno.
UPDATE pixar.box_office 
SET rating = 9
WHERE domestic_sales > 400000000;

Exercício 9: Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de
300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE pixar.box_office 
SET rating = 6
WHERE international_sales < 300000000
AND domestic_sales > 200000000;

Exercício 10: Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.
DELETE FROM pixar.box_office
WHERE movie_id IN (7, 8);

DELETE FROM pixar.movies
WHERE length_minutes < 100;

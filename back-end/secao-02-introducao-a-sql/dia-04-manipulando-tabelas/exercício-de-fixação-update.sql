SET SQL_SAFE_UPDATES = 0;
Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome “JULIA” para “JULES”.
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

Altere a linha da tabela categoria onde o valor da coluna x é igual “Sci-fi” para “Science Fiction”.
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação “G”, “PG” ou “PG-13” e um custo de substituição maior que $20.
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10
		WHEN length > 100 THEN 20
	END
);

Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager)
cujos departamentos (department) são diferentes.
SELECT 
    e.first_name AS colaboradores, m.first_name AS gerentes
FROM
    hr.employees AS e
        INNER JOIN
    hr.employees AS m ON e.manager_id = m.employee_id
WHERE
    e.department_id <> m.department_id;

Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
    hr.employees AS manager
INNER JOIN
    hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY
    manager.employee_id;
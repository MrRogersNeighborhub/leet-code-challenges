# Write your MySQL query statement below
SELECT *
FROM cinema c
WHERE Lower(c.description) NOT LIKE '%boring%'
AND c.id % 2 = 1
ORDER BY c.rating desc
SELECT DISTINCT city
FROM   station
WHERE  city RLIKE '^[^aeiouAEIOU]'AND city RLIKE'[^aeiouAEIOU]$'
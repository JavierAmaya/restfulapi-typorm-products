WITH  comprasCustomer AS(
SELECT 
        c.CustomerID,
        c.CustomerName,
        s.SupplierID,
        s.SupplierName,
        MONTH(o.OrderDate) as mes,
        YEAR(o.OrderDate) as [year],
        SUM(od.Quantity*p.Price) as total      
FROM myExample.Products as p
INNER JOIN myExample.Suppliers as s
ON p.SupplierID = s.SupplierID
INNER JOIN myExample.OrderDetails as od
ON p.ProductID = od.ProductID
INNER JOIN myExample.Orders as o
ON od.OrderID = o.OrderID
INNER JOIN myExample.Customers as c
ON o.CustomerID = c.CustomerID
GROUP BY
    c.CustomerID,
        c.CustomerName,
        s.SupplierID,
        s.SupplierName,
        MONTH(o.OrderDate),
        YEAR(o.OrderDate) 
), Promedio AS (
    SELECT 
        CASE 
            WHEN AVG(cc.total) < 75 THEN '0'
            WHEN AVG(cc.total) > 75 THEN '1'
        END as promedio
    FROM comprasCustomer as cc
) 
SELECT 
    cus.CustomerID,
    cus.CustomerName,
    cc.SupplierID,
    cc.SupplierName,
    cc.mes,
    cc.[year],
    cc.total,
    pm.promedio
FROM myExample.Customers as cus
INNER JOIN Promedio as pm
ON 1=1
LEFT JOIN comprasCustomer as cc
ON cus.CustomerID = cc.CustomerID
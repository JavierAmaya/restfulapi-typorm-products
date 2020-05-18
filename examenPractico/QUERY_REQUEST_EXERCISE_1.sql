WITH  comprasCustomer AS(
SELECT 
    s.SupplierID,
    MONTH(o.OrderDate) as mes,
    YEAR(o.OrderDate) as [year],
    AVG(od.Quantity*p.Price) as promedio      
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
        s.SupplierID,
        MONTH(o.OrderDate),
        YEAR(o.OrderDate) 
), superoPromedio AS (
    
SELECT 
    c.CustomerID as customer,
    SUM(od.QUantity * p.Price) as facturado
FROM myExample.Products as p
INNER JOIN myExample.Suppliers as s
ON p.SupplierID = s.SupplierID
INNER JOIN myExample.OrderDetails as od
ON p.ProductID = od.ProductID
INNER JOIN myExample.Orders as o
ON od.OrderID = o.OrderID
INNER JOIN myExample.Customers as c
ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerID

)
SELECT 
    c.CustomerID,
    c.CustomerName,
    s.SupplierID,
    s.SupplierName,
    MONTH(OrderDate) as mes,
    YEAR(OrderDate) as anio,
    SUM(od.QUantity * p.Price) as total,
    CASE
    WHEN SUM(od.QUantity * p.Price) < cc.promedio  THEN 0
    ELSE 1
    END as SuperoPromedio,
    CONVERT(DECIMAL(16,4), (SUM(od.QUantity * p.Price)/sp.facturado)) as PorcentajeVentaMensual

FROM myExample.Orders as o  
INNER JOIN myExample.OrderDetails as od
ON o.OrderID = od.OrderID
INNER JOIN myExample.Customers as c
ON o.CustomerID = c.CustomerID 
INNER JOIN myExample.Products as p
ON od.ProductID = p.ProductID
INNER JOIN myExample.Suppliers as s
ON p.SupplierID = s.SupplierID
INNER JOIN comprasCustomer as cc
ON cc.SupplierID = s.SupplierID  AND cc.mes = MONTH(OrderDate)
INNER JOIN superoPromedio as sp
ON sp.customer = c.CustomerID
GROUP BY 
    c.CustomerID,
    c.CustomerName,
    s.SupplierID,
    s.SupplierName,
    MONTH(OrderDate),
    YEAR(OrderDate),
    cc.promedio,
    sp.facturado

--SELECT * from mySchema.fact_summary
--SELECT top 1 anio from mySchema.settings

CREATE SCHEMA mySchema;
CREATE TABLE mySchema.fact_summary(
    CustomerID int ,
    CustomerName NVARCHAR (200),
    SupplierID int ,
    SupplierName NVARCHAR(200),
    Mes int,
    Anio int,
    Total int,
    SuperoPromedio int,
    PorcentajeVentaMensual FLOAT
)

CREATE TABLE mySchema.settings(
    IDAnio int,
    Anio int
)
INSERT INTO mySchema.settings VALUES (1,1997)

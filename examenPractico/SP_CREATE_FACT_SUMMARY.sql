CREATE PROCEDURE mySchema.SP_CREATE_FACT_SUMMARY
    @CustomerID int,
    @CustomerName NVARCHAR(200),
    @SupplierID int,
    @SupplierName NVARCHAR(200),
    @Mes int,
    @Anio int,
    @Total int,
    @SuperoPromedio int,
    @PorcentajeVentaMensual int

AS
DECLARE @existeCustomer  INT = (SELECT COUNT(*) as N FROM mySchema.fact_summary where CustomerID = @CustomerID)
DECLARE @existeSupplier  INT = (SELECT COUNT(*) as N FROM mySchema.fact_summary where SupplierID = @SupplierID)
IF @existeCustomer > 0 AND @existeSupplier >0 BEGIN
    SELECT 0  as successed, 'El ID enviado ya existe' as MSG
END ELSE BEGIN    
    INSERT INTO mySchema.fact_summary
    VALUES (@CustomerID,@CustomerName,@SupplierID,@SupplierName,@Mes,@Anio,@Total,@SuperoPromedio,@PorcentajeVentaMensual)
    SELECT 1 as successed, 'Tu registro fue almacenado' as MSG
END    
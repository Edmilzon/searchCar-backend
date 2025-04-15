-- Insertar países
INSERT INTO Pais (nombre) VALUES ('Bolivia'), ('Argentina'), ('Brasil'), ('Chile'), ('Perú');

-- Insertar ciudades
INSERT INTO Ciudad (nombre, id_pais) VALUES 
('Cochabamba', 1), ('La Paz', 1),('Santa Cruz', 1),
('Sucre', 1),
('Oruro', 1),
('Potosí', 1),
('Tarija', 1),
('Trinidad', 1),
('Cobija', 1),
('Montero', 1),
('Quillacollo', 1),
('Sacaba', 1);
-- Insertar provincias
INSERT INTO Provincia (nombre, id_ciudad) VALUES 
('Quillacollo', 1), 
('El Alto', 2),
('Palermo', 3), 
('Centro', 4),
('Providencia', 5),
('Plan 3000', 6),
('Villa Armonía', 7),
('Zona Central', 8),
('Villa Imperial', 9),
('San Roque', 10),
('Loma Suárez', 11),
('Villa Busch', 12);

-- Insertar direcciones
INSERT INTO Direccion (id_provincia, calle, zona, num_casa) VALUES 
(1, 'Av. Blanco Galindo', 'Zona Norte', '123'), 
(2, 'Calle 16 de Julio', 'Zona Sur', '456'), 
(3, 'Av. Santa Fe', 'Zona Centro', '789'),
(6, 'Av. Virgen de Cotoca', 'Zona Este', '100'),
(7, 'Av. Hernando Siles', 'Zona Sur', '101'),
(8, 'Calle Bolívar', 'Zona Centro', '102'),
(9, 'Av. Cerro Rico', 'Zona Norte', '103'),
(10, 'Av. La Banda', 'Zona Sur', '104'),
(11, 'Av. Mariscal Sucre', 'Zona Central', '105'),
(12, 'Av. 9 de Febrero', 'Zona Sur', '106');

-- Insertar usuarios
INSERT INTO Usuario (nombre, fecha_nacimiento, genero, id_ciudad, contrasena, google_id, telefono) VALUES 
('Juan Pérez', '1990-05-15', 'Masculino', 1, 'password123', 'juanp@gmail.com', '+59170000001'),
('María López', '1985-08-20', 'Femenino', 2, 'securepass', 'marial@gmail.com', '+59170000002'),
('Carlos Rojas', '1992-01-10', 'Masculino', 6, 'pass123', 'carlosr@gmail.com', '+59170000003'),
('Ana Torres', '1994-03-22', 'Femenino', 7, 'pass456', 'anatorres@gmail.com', '+59170000004'),
('Luis Martínez', '1988-07-30', 'Masculino', 8, 'pass789', 'luism@gmail.com', '+59170000005'),
('Sofía Vargas', '1996-11-12', 'Femenino', 9, 'clave321', 'sofiav@gmail.com', '+59170000006'),
('Mario Quispe', '1991-02-18', 'Masculino', 10, 'clave654', 'marioq@gmail.com', '+59170000007'),
('Lucía Fernández', '1993-06-25', 'Femenino', 11, 'luciaf', 'luciaf@gmail.com', '+59170000008'),
('Jorge Méndez', '1990-09-05', 'Masculino', 12, 'jorgepass', 'jorgem@gmail.com', '+59170000009');

-- Insertar roles
INSERT INTO Rol (rol) VALUES ('Administrador'), ('Cliente');

-- Insertar relación usuario-rol
INSERT INTO Usuario_Rol (id_rol, id_usuario) VALUES 
(1, 13), (1, 14),(2, 15), (2, 16), (1, 17), (2, 18), (2, 19), (2, 20), (2, 21);

-- Insertar carros
INSERT INTO Carro (vim, anio, marca, modelo, placa, id_direccion, asientos, puertas, soat, precio_por_dia, transmision, estado, id_usuario_rol) VALUES 
('1HGCM82633A123456', 2020, 'Toyota', 'Corolla', 'ABC-123', 14, 5, 4, TRUE, 50.00, 'Automática', 'Disponible', 13),
('2HGCM82633A654321', 2019, 'Honda', 'Civic', 'XYZ-789', 15, 5, 4, TRUE, 45.00, 'Manual', 'Disponible', 14),
('3HGCM82633A000001', 2021, 'Hyundai', 'Accent', 'BOL-101', 16, 5, 4, TRUE, 40.00, 'Manual', 'Disponible', 15),
('4HGCM82633A000002', 2022, 'Kia', 'Rio', 'BOL-102', 17, 5, 4, TRUE, 42.00, 'Automática', 'Disponible', 16),
('5HGCM82633A000003', 2020, 'Suzuki', 'Swift', 'BOL-103', 18, 5, 4, TRUE, 38.00, 'Manual', 'Disponible', 17),
('6HGCM82633A000004', 2023, 'Mazda', '3', 'BOL-104', 19, 5, 4, TRUE, 55.00, 'Automática', 'Disponible', 18),
('7HGCM82633A000005', 2021, 'Chevrolet', 'Onix', 'BOL-105', 20, 5, 4, TRUE, 43.00, 'Manual', 'Disponible', 19),
('8HGCM82633A000006', 2022, 'Nissan', 'Versa', 'BOL-106', 21, 5, 4, TRUE, 48.00, 'Automática', 'Disponible', 20),
('9HGCM82633A000007', 2019, 'Ford', 'Fiesta', 'BOL-107', 22, 5, 4, TRUE, 37.00, 'Manual', 'Disponible', 21);

-- Insertar ubicaciones relacionadas con direcciones
INSERT INTO Ubicacion (id_direccion, coordenadas, radio_cobertura) VALUES 
(14, POINT(17.3958, -66.1568), 500),
(15, POINT(17.4012, -66.1752), 300),
(16, POINT(17.4075, -66.1845), 700),
(17, POINT(17.7833, -63.1821), 500),
(18, POINT(19.0333, -65.2627), 450),
(19, POINT(17.9667, -67.1167), 600),
(20, POINT(19.5833, -65.7500), 500),
(21, POINT(21.5333, -64.7333), 550),
(22, POINT(14.8333, -64.9000), 400),
(23, POINT(11.0333, -68.7667), 300);

-- Insertar imágenes aleatorias para los carros (puedes cambiar los enlaces según prefieras)
INSERT INTO Imagen (data, id_carro) VALUES 
('https://img.freepik.com/psd-gratis/automovil-moderno-aislado_23-2151504488.jpg', 23), 
('https://img.freepik.com/psd-gratis/automovil-moderno-aislado_23-2151504488.jpg', 23), 
('https://img.freepik.com/fotos-premium/sedan-familiar-urbano-tamano-medio-azul-sobre-uniforme-blanco_101266-2198.jpg', 23),
('https://img.freepik.com/foto-gratis/vista-coche-3d_23-2150796896.jpg)', 24), 
('https://img.freepik.com/foto-gratis/vista-coche-3d_23-2150796896.jpg', 24), 
('https://img.freepik.com/foto-gratis/divertida-ilustracion-3d-trex_183364-81258.jpg', 24),
('https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_1280.jpg', 25),
('https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg', 25),
('https://img.freepik.com/foto-gratis/divertida-ilustracion-3d-trex_183364-81258.jpg', 25),
('https://img.freepik.com/foto-gratis/divertida-ilustracion-3d-trex_183364-81258.jpg', 26);
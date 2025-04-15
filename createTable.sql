CREATE TABLE Pais (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Ciudad (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    id_pais INT REFERENCES Pais(id) ON DELETE CASCADE
);

CREATE TABLE Provincia (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    id_ciudad INT REFERENCES Ciudad(id) ON DELETE CASCADE
);

CREATE TABLE Direccion (
    id SERIAL PRIMARY KEY,
    id_provincia INT REFERENCES Provincia(id) ON DELETE SET NULL,
    calle VARCHAR(255),
    zona VARCHAR(255),
    num_casa VARCHAR(255)
);

CREATE TABLE Ubicacion (
    id SERIAL PRIMARY KEY,
    id_direccion INT REFERENCES Direccion(id) ON DELETE CASCADE,
    coordenadas POINT NOT NULL,
    radio_cobertura INT CHECK (radio_cobertura > 0)
);

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    genero VARCHAR(50),
    id_ciudad INT REFERENCES Ciudad(id) ON DELETE SET NULL,
    contrasena VARCHAR(255) NOT NULL,
    google_id VARCHAR(255) UNIQUE,
    foto VARCHAR(255),
    telefono VARCHAR(50) UNIQUE
);

CREATE TABLE Rol (
    id SERIAL PRIMARY KEY,
    rol VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Usuario_Rol (
    id SERIAL PRIMARY KEY,
    id_rol INT REFERENCES Rol(id) ON DELETE CASCADE,
    id_usuario INT REFERENCES Usuario(id) ON DELETE CASCADE
);

CREATE TABLE Caracteristicas_Adicionales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Carro (
    id SERIAL PRIMARY KEY,
    vim VARCHAR(255) UNIQUE NOT NULL,
    anio INT CHECK (anio > 1900),
    marca VARCHAR(255),
    modelo VARCHAR(255),
    placa VARCHAR(255) UNIQUE NOT NULL,
    id_direccion INT REFERENCES Direccion(id) ON DELETE SET NULL,
    asientos INT CHECK (asientos > 0),
    puertas INT CHECK (puertas > 0),
    soat BOOLEAN DEFAULT TRUE,
    precio_por_dia DECIMAL(10,2) CHECK (precio_por_dia >= 0),
    num_mantenimientos INT DEFAULT 0 CHECK (num_mantenimientos >= 0),
    transmision VARCHAR(50),
    estado VARCHAR(50),
    id_usuario_rol INT REFERENCES Usuario_Rol(id) ON DELETE SET NULL
);

CREATE TABLE CaracteristicasAdicionalesCarro (
    id SERIAL PRIMARY KEY,
    id_carro INT REFERENCES Carro(id) ON DELETE CASCADE,
    id_caracteristicas_adicionales INT REFERENCES Caracteristicas_Adicionales(id) ON DELETE CASCADE
);

CREATE TABLE Imagen (
    id SERIAL PRIMARY KEY,
    data VARCHAR(255) NOT NULL,
    id_carro INT REFERENCES Carro(id) ON DELETE CASCADE
);

CREATE TABLE TipoCombustible (
    id SERIAL PRIMARY KEY,
    tipo_de_combustible VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE CombustibleCarro (
    id SERIAL PRIMARY KEY,
    id_tipo_combustible INT REFERENCES TipoCombustible(id) ON DELETE CASCADE,
    id_carro INT REFERENCES Carro(id) ON DELETE CASCADE
);
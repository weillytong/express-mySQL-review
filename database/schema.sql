DROP DATABASE IF EXISTS gamesDB;

CREATE DATABASE gamesDB;

USE gamesDB;

CREATE TABLE Games (
  id INT auto_increment primary key,
  name VARCHAR(255),
  rating INT,
  description VARCHAR(255)
);
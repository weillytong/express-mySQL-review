DROP DATABASE IF EXISTS gamesDB;

CREATE DATABASE gamesDB;

USE gamesDB;

CREATE TABLE Games (
  id INT auto_increment,
  name VARCHAR(255),
  rating INT,
  description VARCHAR(255),
  PRIMARY KEY (id)
);
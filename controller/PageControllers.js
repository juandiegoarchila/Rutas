const express = require('express');

const VistaPrincipal = (req, res) => {
  res.render('home');
};
const Vistainicio = (req, res) => {
  res.render('inicio');
};

const VistaTable = (req, res) => {
  res.render('table');
};

const VistaNotificacion = (req, res) => {
  res.render('notificacion');
};

module.exports = {
  VistaPrincipal,
  VistaTable,
  VistaNotificacion,
  Vistainicio
};

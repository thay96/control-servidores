module.exports = {
  apps: [
    {
      name: "sistema-gestion-entrada",
      script: "backend/app.js",
      cwd: "C:/Controles/Sistema-de-entrada/Sistema-de-entrada-Recepcion/Sistema-de-entrada-Recepcion"
    },
    {
      name: "agente-lector-cedulas",
      script: "agente.js",
      cwd: "C:/Controles/Sistema-de-entrada/Agente-de-lector/agente-lector-cedulas"
    },
    {
      name: "formularios-sst",
      script: "backend/app.js",
      cwd: "C:/Controles/SST-capacitaciones/formularios-sst"
    },
    {
      name: "tablero-pesv-streamlit",
      script: "C:/Controles/automatizaciones/automatizacion.SST/venv/Scripts/pythonw.exe",
      args: "-m streamlit run app.py --server.port 8501 --server.headless true --server.baseUrlPath streamlit --server.enableCORS false --server.enableXsrfProtection false",
      cwd: "C:/Controles/automatizaciones/automatizacion.SST",
      interpreter: "none"
    },

    {
      name: "caddy-ssl-proxy",
      script: "caddy.exe",
      args: "run --config C:/Controles/control-servidores/Caddyfile",
      cwd: "C:/Controles/control-servidores",
      interpreter: "none"
    }
  ]
};
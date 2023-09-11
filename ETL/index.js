require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
const { extractExcel } = require('./extract/excel'); // Importa el módulo de extracción de Excel en línea

async function main() {
  try {
    console.log("Iniciando el proceso de extracción...");

    // Ejecuta la extracción de datos de Excel en línea
    const excelData = await extractExcel();

    // Puedes continuar con las etapas de transformación y carga aquí
    // const transformedData = await transformData(excelData);
    // await loadData(transformedData);

    console.log('Proceso de ETL completado exitosamente.');
  } catch (error) {
    console.error('Error en el proceso de ETL:', error);
  }
}

main();

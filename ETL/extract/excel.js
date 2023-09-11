require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const { Workbook } = require('exceljs');

async function extractExcel() {
  try {
    // Descarga el archivo Excel desde la URL
    const response = await axios.get(process.env.EXCEL_FILE_URL, {
      responseType: 'arraybuffer', // Para obtener datos binarios
    });

    // Guarda el archivo Excel descargado en tu sistema de archivos local
    const excelFilePath = 'downloaded_excel.xlsx';
    fs.writeFileSync(excelFilePath, response.data);

    // Procesa los datos de Excel como lo necesites
    const excelClient = new Workbook();
    await excelClient.xlsx.readFile(excelFilePath);

    const worksheet = excelClient.getWorksheet(1);

    // Haz el procesamiento necesario aquí
    // ...

    console.log(worksheet);

    // Elimina el archivo descargado después de procesarlo
    fs.unlinkSync(excelFilePath);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al extraer datos desde Excel: ' + error.message);
  }
}

module.exports = {
  extractExcel,
};

/**
 * @author Henry A. Gomez M.
 */

import graphicData from '../db/graphicData'; // Ajusta la ruta si es necesario

const apiService = {
  getGraphData: async () => {
    try {
      // Simplemente retornamos los datos directamente
      return graphicData;
    } catch (error) {
      throw error;
    }
  },
  // Otras funciones de servicio...
};

export default apiService;

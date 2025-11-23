import axios from "axios";
import { useEffect, useState } from "react";

export default function useGet({ url }) {
  // states pour renvoyer des les valeurs de useGet
  const [data, setData] = useEffect(null);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState(null);

  // effet de bord appel api
  useEffect(() => {
    const getData = async () => {
      // mise à jour du loader
      setLoading(true);

      try {
        const reponse = await axios.get(url, { withCredentials: true });

        // mise à jour du loader
        setLoading(false);
      } catch (err) {
        // mise à jour de l'erreur
        setErreur(err.response);
      } finally {
        // mise à jour de data
        setData(reponse.data);
      }
    };

    getData()
   
  }, []);


  return {data, loading, erreur}
}

import './App.css';
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';

function App() {
  return(
    <Grid container spacing={5} sx={{justifyContent: "center", alignItems: "center"}}>

      {/* Encabezado */}
      <Grid size={{ xs:12, md:12}}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
        <Grid size={{ xs: 12, md: 12 }}
          container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>

          <AlertUI description="No se prevén lluvias" />

        </Grid>

      {/* Selector */}
      <Grid>Elemento: Selector</Grid>

      {/* Indicadores */}
      <Grid>Elemento: Indicadores</Grid>

      {/* Gráfico */}
      <Grid>Elemento: Gráfico</Grid>

      {/* Tabla */}
      <Grid>Elemento: Tabla</Grid>

      {/* Información adicional */}
      <Grid>Elemento: Información adicional</Grid>
    </Grid>
  );
}

export default App;
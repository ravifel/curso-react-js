import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Item(props) {
  React.useEffect(() => {
    console.log("O componente foi montado !!!");
    //return () => console.log("O componente foi desmontado !!!");
  }, []);

  return (
    <Card sx={{ minWidth: 275, margin: "1em" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.subTitulo}
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint
          temporibus, a maxime dolores, tenetur, fugiat harum eaque enim esse
          veniam! Pariatur modi accusantium aperiam at repudiandae harum sit
          nobis!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.funcaoBotao}>
          Botão
        </Button>
      </CardActions>
    </Card>
  );
}

//o "useEffect" ajudaa controlar o componente de carregamento
//rodar blocos de códigos de algum "State" for alterado
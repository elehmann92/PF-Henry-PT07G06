import { useLocation } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {
  updateCart,
  sendShopOrder,
} from "../../redux/actions/products.actions";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";

export default function OrdenDeCompra() {
  // ?collection_id=50800700904&collection_status=rejected&payment_id=50800700904&status=rejected&external_reference=null&payment_type=credit_card&merchant_order_id=6252221350&preference_id=1223144793-103dc1ee-100d-4af2-9ed5-cf3269e5599d&site_id=MLA&processing_mode=aggregator&merchant_account_id=null

  const dispatch = useDispatch();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const payment_id = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const preference_id = searchParams.get("preference_id");
  const merchant_order_id = searchParams.get("merchant_order_id");

  const datosOrder = { status, payment_id, merchant_order_id, preference_id };

  React.useEffect(() => {
    console.log('entre en use effect')
    dispatch(updateCart([]));
    /* Object.keys(datosOrder).length !== 0 &&  */dispatch(sendShopOrder(datosOrder));
  }, [datosOrder]);

  return (
    <Container
      sx={{
        maxWidth: 345,
        m: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 1,
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: 35, my: 5 }}>
        Detalles de la Compra
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://res.cloudinary.com/dvkvyi1dr/image/upload/v1644964866/86724-sale_peim54.gif"
            alt="compra realizada"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: 28 }}
            >
              Su compra ha sido: {status}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 20 }}
            >
              Seguimiento del pago: {payment_id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="var(--primaryColor)" >
              Go Home
            </Button> */}
        </CardActions>
      </Card>
    </Container>
  );
}

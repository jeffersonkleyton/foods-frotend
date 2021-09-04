import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Adicionais from "./Adicionais";
import Molhos from "./Molhos";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addItemCesta } from "../../store/fatchActions/index";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function getSteps() {
  return [
    "Adicionais",
    "Molhos",
    "Quantidade",
    "Deseja fazer alguma observação?",
  ];
}

export default function FullScreenDialog(props) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [pedido, setPedido] = React.useState({});
  const [adicionais, setAdicionais] = React.useState([]);
  const [molho, setMolho] = React.useState("");
  const [observacao, setObservacao] = React.useState("");
  const [quantidade, setQuantidade] = React.useState(1);

  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep === steps.length - 1) {
      const obj = {
        posicao: props.index,
        adicionais: adicionais,
        molho: molho,
        observacao: observacao,
        quantidade: quantidade,
      };
      setPedido(obj);
      props.handleClose(obj);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  async function funcAdicionais(adc) {
    await setAdicionais(adc);
  }

  async function funcMolho(molho) {
    await setMolho(molho);
  }

  async function adicionar() {
    setQuantidade(quantidade + 1);
  }

  async function remover() {
    setQuantidade(quantidade - 1);
  }

  const dispatch = useDispatch();
  const funcObservacao = (event) => {
    setObservacao(event.target.value);
    //    dispatch(addItemCesta(pedido));
  };

  function editar() {
    setActiveStep(0);
  }

  useEffect(() => {}, []);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Adicionais adiocionaisFunc={funcAdicionais} />;
      case 1:
        return <Molhos funcMolho={funcMolho} />;
      case 2:
        return (
          <>
            <div>
              <Button onClick={remover}> - </Button>{" "}
              <span
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  border: "1px, solid #000000fd",
                }}
              >
                {quantidade} <Button onClick={adicionar}>+</Button>
              </span>
            </div>
          </>
        );
      case 3:
        return (
          <TextField
            id="outlined-secondary"
            label="Observação"
            variant="outlined"
            color="secondary"
            style={{ width: "100%" }}
            value={observacao}
            onChange={funcObservacao}
          />
        );
      default:
        return "Unknown step";
    }
  }

  return (
    <Dialog
      fullScreen
      open={props.abrir}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="div" className={classes.title}>
            Adicionar ao Carrinho
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography component="div">{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Voltar
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Finalizar"
                        : "Proximo"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Button onClick={editar} className={classes.button}>
              voltar
            </Button>
          </Paper>
        )}
      </div>
    </Dialog>
  );
}

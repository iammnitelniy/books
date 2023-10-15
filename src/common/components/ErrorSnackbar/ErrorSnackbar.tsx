import { useSelector } from "react-redux";
import { AlertProps, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {selectAppError} from "../../../app/app.selectors.ts";
import {useActions} from "../../hooks/useActions.ts";
import {forwardRef} from "react";
import {appActions} from "../../../app/app.slice.ts";


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
  const error = useSelector(selectAppError);
  const { setAppError } = useActions(appActions);

  const handleClose = (event?: any | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setAppError({ error: null });
    event
  };

  const isOpen = error !== null;

  return (
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
  );
}


import {Dispatch} from "redux";
import {appActions} from "../../app/app.slice.ts";
import {BooksDomainType} from "../../features/Header/api/header.api.ts";


export const handleServerAppError = (
  data: BooksDomainType,
  dispatch: Dispatch,
  showError: boolean = true,
): void => {
  if (showError) {
    dispatch(appActions.setAppError({ error:  "Some error occurred" + data.totalItems,  }));
  }
};

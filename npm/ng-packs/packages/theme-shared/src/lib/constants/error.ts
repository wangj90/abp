export const DEFAULT_ERROR_MESSAGES = {
  defaultError: {
    title: 'An error has occurred!',
    details: 'Error detail not sent by server.',
  },
  defaultError401: {
    title: 'You are not authenticated!',
    details: 'You should be authenticated (sign in) in order to perform this operation.',
  },
  defaultError403: {
    title: 'You are not authorized!',
    details: 'You are not allowed to perform this operation.',
  },
  defaultError404: {
    title: 'Resource not found!',
    details: 'The resource requested could not found on the server.',
  },
  defaultError500: {
    title: 'Internal server error',
    details: 'Error detail not sent by server.',
  },
};

export const DEFAULT_ERROR_LOCALIZATIONS = {
  defaultError: {
    title: 'AbpUi::DefaultErrorMessage',
    details: 'AbpUi::DefaultErrorMessageDetail',
  },
  defaultError401: {
    title: 'AbpUi::DefaultErrorMessage401',
    details: 'AbpUi::DefaultErrorMessage401Detail',
  },
  defaultError403: {
    title: 'AbpUi::DefaultErrorMessage403',
    details: 'AbpUi::DefaultErrorMessage403Detail',
  },
  defaultError404: {
    title: 'AbpUi::DefaultErrorMessage404',
    details: 'AbpUi::DefaultErrorMessage404Detail',
  },
  defaultError500: {
    title: 'AbpUi::500Message',
    details: 'AbpUi::DefaultErrorMessage',
  },
};

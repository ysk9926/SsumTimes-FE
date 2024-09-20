interface IErrorForm {
  message: string | undefined;
}

export default function ErrorForm({ message }: IErrorForm) {
  return message === "" || !message ? null : <div className="ml-2 mt-2 text-xs text-red-600">{message}</div>;
}

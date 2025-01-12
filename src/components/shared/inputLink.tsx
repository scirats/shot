import {useState} from "react";

type InputLinkProps = {
  url: string;
};

const InputLink = ({url} : InputLinkProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <input 
        type="text"
        readOnly
        value={url}
        className="text-sm flex-1"
      />
      <button
        onClick={copyToClipboard}
        className="text-sm"
      >
        {!copied ? "Copy" : "Copied!"}
      </button>
    </div>
  )
}

export default InputLink;

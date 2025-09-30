import { aboutMeText } from "~/constants/stuff"
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { useRef, useState } from "react";

const ArtistInfo = ({src}:ArtistInfoProps) => {
  const dialogRef = useRef<any>(null);
  const [dialogHeader, setDialogHeader] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const handleClick = (index:number) => {
    const title = aboutMeText[index].title;
    const text = aboutMeText[index].text;
    setDialogHeader(title);
    setDialogContent(text);
    dialogRef.current?.setProperties({ header: title }, true);
    setTimeout(() => {
      dialogRef.current?.show();
    }, 0);
  }

  return (
    <div className="flex justify-center items-center gap-4" id="artist-info">
      <div className="hidden md:block">
        <div className="border-4 border-black w-80 h-80">
          <img src={src} alt="The artist"/>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-lg p-4">
        {aboutMeText.map((item, index) => (
          <div className="bg-white border-2 border-black p-2 flex justify-between toBeExpanded" key={index} onClick={() => handleClick(index)}>
            <h2 className="text-black">{item.title}</h2>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </span>
          </div>
        ))}
      </div>

      <DialogComponent id="popup" header={dialogHeader} visible={false} ref={dialogRef} isModal={true} showCloseIcon={true} width={300}>
        <p className="text-justify font-bold leading-5">{dialogContent}</p>
      </DialogComponent>
    </div>
  )
}

export default ArtistInfo
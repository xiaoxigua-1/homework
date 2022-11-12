import { Button, Container, Select } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

interface Device {
  id: string;
  label: string;
}

const Homework: NextPage = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [cameraList, setCameraList] = useState<MediaDeviceInfo[]>([]);
  const [camera, setCamera] = useState<string | undefined>();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true });
  }, []);

  const updateCameraList = () => {
    (async() => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      console.log(devices);
      const cameraDevices = devices.filter(derice => derice.kind === 'videoinput');
      setCameraList(cameraDevices);
    })(); 
  };

  const startCamera = async() => {
    if (video.current && camera) {
      video.current.srcObject = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: camera ?? undefined
          }
        }
      });
      video.current.play();
    }
  };

  const endCamera = () => {
    if (video.current) {
      video.current.srcObject = null;
    }
  };

  return (
    <Container className="mt-10">
      <Select placeholder="Select Camera Devices" onClick={updateCameraList} onChange={v => setCamera(v.target.value)}>
        {cameraList.map(device => (
          <option value={device.deviceId} key={device.deviceId}>{device.label}</option>
        ))} 
      </Select>
      <div className="mt-5 flex justify-center">
        <Button colorScheme="blue" className="flex-grow mx-3" onClick={startCamera}>Start</Button>
        <Button colorScheme="red" className="flex-grow mx-3" onClick={endCamera}>End</Button>
      </div>
      <video ref={video} className="mt-5"/>
    </Container>
  );
};

export default Homework;


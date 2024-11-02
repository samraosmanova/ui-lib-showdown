// App.jsx

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Form() {
  const [volume, setVolume] = useState([50]);
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isChecked, setIsChecked] = useState(false);
  const [bio, setBio] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [file, setFile] = useState(null);

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "8px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
        Extended Radix UI Form
      </h2>

      {/* Text Input */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Textarea for Bio */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us about yourself"
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ddd",
            height: "80px",
            resize: "vertical",
          }}
        />
      </div>

      {/* Checkbox */}
      <div
        style={{ marginBottom: "25px", display: "flex", alignItems: "center" }}
      >
        <Checkbox.Root
          checked={isChecked}
          onCheckedChange={(checked) => setIsChecked(true)}
          id="terms"
          style={{
            width: 18,
            height: 18,
            backgroundColor: isChecked ? "blue" : "#eaeaea",
            borderRadius: "4px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          <Checkbox.Indicator>
            <CheckIcon color="white" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>

      {/* Radio Group */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Choose an option
        </label>
        <RadioGroup.Root
          className="RadioGroupRoot"
          defaultValue="default"
          aria-label="View density"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r1">
              Default
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <RadioGroup.Item
              className="RadioGroupItem"
              value="comfortable"
              id="r2"
            >
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r2">
              Comfortable
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r3">
              Compact
            </label>
          </div>
        </RadioGroup.Root>
      </div>

      {/* Date Picker */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Select a date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* File Upload */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Upload a file
        </label>
        <input
          type="file"
          onChange={() => {}}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            width: "100%",
          }}
        />
      </div>

      {/* Volume Slider */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>Volume</label>
        <Slider.Root
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          style={{ width: "100%" }}
        >
          <Slider.Track style={{ height: "4px", backgroundColor: "#ddd" }}>
            <Slider.Range style={{ backgroundColor: "#0070f3" }} />
          </Slider.Track>
          <Slider.Thumb
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#0070f3",
              borderRadius: "50%",
            }}
          />
        </Slider.Root>
      </div>

      {/* Dialog Button */}
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            style={{
              padding: "10px 15px",
              borderRadius: "4px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open Dialog
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              position: "fixed",
              inset: 0,
            }}
          />
          <Dialog.Content
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <Dialog.Title style={{ marginBottom: "10px", fontSize: "20px" }}>
              Radix Dialog
            </Dialog.Title>
            <Dialog.Description>
              This is a dialog example using Radix UI.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 15px",
                  borderRadius: "4px",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

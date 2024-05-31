import { useRef } from "react";
import { TextField, Button } from "@mui/material";

import { CONTACTS } from "../../constants/contacts";
import { Container, FlexBox, Grid, Text } from "../../components/UI";

import stubImg from "../../assets/images/image_8.jpg";

import s from "./styles.module.scss";
import { useState } from "react";

const Contact = () => {
  const counterRef = useRef(1);
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formState = { id: counterRef.current, ...form };
    console.log(formState);
    setForm({});
    counterRef.current += 1;
  };

  const handleChange = (name) => (e) => {
    setForm((prevForm) => ({ ...prevForm, [name]: e.target.value }));
  };

  return (
    <Container py={80} color="gray-50">
      <FlexBox column gap={40}>
        <Text as="h2" size={28} color="black" lh="42px">
          Contact Information
        </Text>
        <Grid columns={CONTACTS.length} gap={40}>
          {CONTACTS.map(({ label, value }) => (
            <FlexBox className={s.paper} key={label} p={20} column gap={5}>
              <Text lh="25px" size={18}>
                {label}:
              </Text>
              <Text lh="21px" color="black">
                {value}
              </Text>
            </FlexBox>
          ))}
        </Grid>
        <Grid template="2fr 3fr">
          <div
            className={s.stubImage}
            style={{ backgroundImage: `url(${stubImg})` }}
          />
          <FlexBox
            as="form"
            className={s.paper}
            p={40}
            column
            gap={20}
            onSubmit={handleSubmit}
          >
            <Text color="gray-700" lh="32px" size={20}>
              Feedback
            </Text>
            <TextField
              label="Your Name"
              value={form.name}
              onChange={handleChange("name")}
            />
            <TextField
              label="Your Email"
              value={form.email}
              onChange={handleChange("email")}
            />
            <TextField
              label="Message"
              value={form.message}
              onChange={handleChange("message")}
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              type="submit"
              size="large"
              style={{ width: "50%" }}
            >
              Send
            </Button>
          </FlexBox>
        </Grid>
      </FlexBox>
    </Container>
  );
};

export default Contact;

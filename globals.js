import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 32,
    paddingHorizontal: 10,
    backgroundColor: "#333",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    color: "#ffffff60",
    fontSize: 13,
    lineHeight: 22,
  },
  small: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  smallText: {
    elevation: 2,
    backgroundColor: "#222",
    color: "#fff",
    fontSize: 11,
    borderRadius: 2,
    paddingVertical: 1,
    paddingHorizontal: 8,
    lineHeight: 22,
  },
  thumbImage: {
    height: 200,
    borderRadius: 10,
  },
  image: {
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardsContainer: {
    marginTop: 32,
  },
  cards: {
    marginBottom: 20,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 10,
    elevation: 0.5,
  },
  buttonContainer: {
    marginTop: 20,
    display: "flex",
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#222",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
    color: "#fff",
    fontSize: 14,
    elevation: 2,
  },
});

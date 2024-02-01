import { fixture, Selector } from "testcafe";

fixture("Dice rolling app e2e test").page("https://d20-omega.vercel.app/");

test("My first test", async (t) => {
  // test code goes here

  //selectors
  const leftArrow = Selector(".leftArrow");
  const rightArrow = Selector(".rightArrow");
  const rollButton = Selector(".rollButton");
  //assertions
  await t
    .expect(Selector(".appTitle").withText("Roll the dice!").exists)
    .ok()
    // Set of tests for D20
    .expect(Selector(".diceTitle").withText("D20").exists)
    .ok()
    .expect(
      Selector(".d20DiceImg").withAttribute("alt", "result of dice roll").exists
    )
    .ok()
    .expect(leftArrow.exists)
    .ok()
    .expect(rightArrow.exists)
    .ok()
    .expect(rollButton.exists)
    .ok()
    .click(rollButton)
    .click(rightArrow)
    // Set of tests for D4
    .expect(Selector(".diceTitle").withText("D4").exists)
    .ok()
    .expect(
      Selector(".d4DiceImg").withAttribute("alt", "Result of dice roll").exists
    )
    .ok()
    .click(rollButton)
    .click(rightArrow)
    // Set of tests for D6
    .expect(Selector(".diceTitle").withText("D6").exists)
    .ok()
    .expect(
      Selector(".d6DiceImg").withAttribute("alt", "result of dice roll").exists
    )
    .ok()
    .click(rollButton)
    // Set of tests for D8
    .click(rightArrow)
    .expect(Selector(".diceTitle").withText("D8").exists)
    .ok()
    .expect(
      Selector(".d8DiceImg").withAttribute("alt", "result of dice roll").exists
    )
    .ok()
    .click(rollButton)
    // Set of tests for D10
    .click(rightArrow)
    .expect(Selector(".diceTitle").withText("D10").exists)
    .ok()
    .expect(
      Selector(".d10DiceImg").withAttribute("alt", "result of dice roll").exists
    )
    .ok()
    .click(rollButton)
    // Set of tests for D12
    .click(rightArrow)
    .expect(Selector(".diceTitle").withText("D12").exists)
    .ok()
    .expect(
      Selector(".d12DiceImg").withAttribute("alt", "result of dice roll").exists
    )
    .ok()
    .click(rollButton)
    // Set of tests for D100
    .click(rightArrow)
    .expect(Selector(".diceTitle").withText("D100").exists)
    .ok()
    // This will not pass until merged changes have been deployed
    // .expect(
    //   Selector(".d100DiceImg").withAttribute(
    //     "alt",
    //     "Dice showing result of roll"
    //   ).exists
    // )
    // .ok()
    .click(rollButton)
    .click(rightArrow)
    .expect(Selector(".diceTitle").withText("Life Counter").exists)
    .ok()
    .expect(Selector(".playerGridItem").withText("20").exists)
    .ok()
    .expect(Selector(".playerName").withText("Player 2").exists)
    .ok()
    .expect(Selector(".playerName").withText("Player 1").exists)
    .ok()
    // Replacing player 1 name
    .click(Selector(".playerName").withText("Player 1"))
    .click(Selector(".inputBox1"))
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("j")
    .pressKey("a")
    .pressKey("c")
    .pressKey("o")
    .pressKey("b")
    .click(rollButton)
    .expect(Selector(".playerName").withText("jacob").exists)
    .ok()
    // Replacing player 2 name;
    .click(Selector(".playerName").withText("Player 2"))
    .click(Selector(".inputBox2"))
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("backspace")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("delete")
    .pressKey("c")
    .pressKey("a")
    .pressKey("m")
    .pressKey("i")
    .pressKey("l")
    .pressKey("l")
    .pressKey("e")
    .click(rollButton)
    .expect(Selector(".playerName").withText("camille").exists)
    .ok()
    // Back to start
    .click(rightArrow)
    .expect(Selector(".appTitle").withText("Roll the dice!").exists)
    .ok()
    // Set of tests for D20
    .expect(Selector(".diceTitle").withText("D20").exists)
    .ok()
    .expect(
      Selector(".d20DiceImg").withAttribute("alt", "result of dice roll").exists
    )
    .ok()
    // cycling through to the left;
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton)
    .click(leftArrow)
    .click(rollButton);
});

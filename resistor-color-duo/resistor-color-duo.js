export const value = (colorSelection) => {
  let colorOne = colorSelection[0].toLowerCase();
  let colorTwo = colorSelection[1].toLowerCase();

  return parseInt(("" + COLORS.indexOf(`${colorOne}`) + COLORS.indexOf(`${colorTwo}`)));
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

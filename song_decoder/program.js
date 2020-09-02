function songDecoder(string) {
    const firstStep = string.replace(/WUB/g, " ");
    const secondStep = firstStep.replace(/\s{2,999}/g, " ");
    const thirdStep = secondStep.replace(/^[ ]/g, "");
    const finalStep = thirdStep.replace(/[ ]$/g, "");
    return finalStep;
  }

  songDecoder("AWUBWUBWUBBWUBWUBWUBC");
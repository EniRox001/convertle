class ConvertFunction {
  static convertLengthToMeter(length: number, unit: string): number {
    switch (unit) {
      case 'm':
        return length;
      case 'cm':
        return length / 100;
      case 'mm':
        return length / 1000;
      case 'km':
        return length * 1000;
      case 'ft':
        return length * 0.3048;
      case 'in':
        return length * 0.0254;
      case 'yd':
        return length * 0.9144;
      default:
        return 0;
    }
  }
  static convertLengthFromMeter(length: number, unit: string): number {
    switch (unit) {
      case 'm':
        return length;
      case 'cm':
        return length * 100;
      case 'mm':
        return length * 1000;
      case 'km':
        return length / 1000;
      case 'ft':
        return length / 0.3048;
      case 'in':
        return length / 0.0254;
      case 'yd':
        return length / 0.9144;
      default:
        return 0;
    }
  }
  static convertWeightToKilogram(weight: number, unit: string): number {
    switch (unit) {
      case 'kg':
        return weight;
      case 'g':
        return weight / 1000;
      case 'mg':
        return weight / 1000000;
      case 'lb':
        return weight * 0.45359237;
      case 'oz':
        return weight * 0.0283495231;
      default:
        return 0;
    }
  }
    static convertWeightFromKilogram(weight: number, unit: string): number {
    switch (unit) {
      case 'kg':
        return weight;
      case 'g':
        return weight * 1000;
      case 'mg':
        return weight * 1000000;
      case 'lb':
        return weight / 0.45359237;
      case 'oz':
        return weight / 0.0283495231;
      default:
        return 0;
    }
}
static convertTemperatureToCelsius(temperature: number, unit: string): number {
    switch (unit) {
      case 'C':
        return temperature;
      case 'F':
        return (temperature - 32) / 1.8;
      case 'K':
        return temperature - 273.15;
      default:
        return 0;
    }
  }
    static convertTemperatureFromCelsius(temperature: number, unit: string): number {
    switch (unit) {
      case 'C':
        return temperature;
      case 'F':
        return temperature * 1.8 + 32;
      case 'K':
        return temperature + 273.15;
      default:
        return 0;
    }
}
static convertVolumeToLiter(volume: number, unit: string): number {
    switch (unit) {
      case 'L':
        return volume;
      case 'mL':
        return volume / 1000;
      case 'cm3':
        return volume / 1000;
      case 'm3':
        return volume * 1000;
      case 'in3':
        return volume * 0.016387064;
      case 'ft3':
        return volume * 28.316846592;
      case 'gal':
        return volume * 3.785411784;
      default:
        return 0;
    }
  }
    static convertVolumeFromLiter(volume: number, unit: string): number {
    switch (unit) {
      case 'L':
        return volume;
      case 'mL':
        return volume * 1000;
      case 'cm3':
        return volume * 1000;
      case 'm3':
        return volume / 1000;
      case 'in3':
        return volume / 0.016387064;
      case 'ft3':
        return volume / 28.316846592;
      case 'gal':
        return volume / 3.785411784;
      default:
        return 0;
    }
}
static convertAreaToSquareMeter(area: number, unit: string): number {
    switch (unit) {
      case 'm2':
        return area;
      case 'cm2':
        return area / 10000;
      case 'mm2':
        return area / 1000000;
      case 'km2':
        return area * 1000000;
      case 'ft2':
        return area * 0.09290304;
      case 'in2':
        return area * 0.00064516;
      case 'yd2':
        return area * 0.83612736;
      case 'ha':
        return area * 10000;
      case 'ac':
        return area * 4046.8564224;
      default:
        return 0;
    }
  }
    static convertAreaFromSquareMeter(area: number, unit: string): number {
    switch (unit) {
      case 'm2':
        return area;
      case 'cm2':
        return area * 10000;
      case 'mm2':
        return area * 1000000;
      case 'km2':
        return area / 1000000;
      case 'ft2':
        return area / 0.09290304;
      case 'in2':
        return area / 0.00064516;
      case 'yd2':
        return area / 0.83612736;
      case 'ha':
        return area / 10000;
      case 'ac':
        return area / 4046.8564224;
      default:
        return 0;
    }
}
static convertDollarToEuro(dollar: number, unit: string): number {
    switch (unit) {
      case 'EUR':
        return dollar * 0.85;
      default:
        return 0;
    }
  }
    static convertDollarFromEuro(euro: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return euro * 1.18;
      default:
        return 0;
    }
}
static convertDollarToPound(dollar: number, unit: string): number {
    switch (unit) {
      case 'GBP':
        return dollar * 0.73;
      default:
        return 0;
    }
  }
    static convertDollarFromPound(pound: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return pound * 1.37;
      default:
        return 0;
    }
}
static convertDollarToYen(dollar: number, unit: string): number {
    switch (unit) {
      case 'JPY':
        return dollar * 109.58;
      default:
        return 0;
    }
  }
    static convertDollarFromYen(yen: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return yen * 0.0091;
      default:
        return 0;
    }
}
static convertDollarToRupee(dollar: number, unit: string): number {
    switch (unit) {
      case 'INR':
        return dollar * 74.29;
      default:
        return 0;
    }
  }
    static convertDollarFromRupee(rupee: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return rupee * 0.013;
      default:
        return 0;
    }
}
static convertDollarToBitcoin(dollar: number, unit: string): number {
    switch (unit) {
      case 'BTC':
        return dollar * 0.000022;
      default:
        return 0;
    }
  }
    static convertDollarFromBitcoin(bitcoin: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return bitcoin * 45000;
      default:
        return 0;
    }
}
static convertDollarToEther(dollar: number, unit: string): number {
    switch (unit) {
      case 'ETH':
        return dollar * 0.00031;
      default:
        return 0;
    }
  }
  static convertDollarFromEther(ether: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return ether * 3200;
      default:
        return 0;
    }
}
static convertDollarToDogecoin(dollar: number, unit: string): number {
    switch (unit) {
      case 'DOGE':
        return dollar * 2.3;
      default:
        return 0;
    }
  }
    static convertDollarFromDogecoin(dogecoin: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return dogecoin * 0.43;
      default:
        return 0;
    }
}
static convertDollarToNaira(dollar: number, unit: string): number {
    switch (unit) {
      case 'NGN':
        return dollar * 411.63;
      default:
        return 0;
    }
  }
    static convertDollarFromNaira(naira: number, unit: string): number {
    switch (unit) {
      case 'USD':
        return naira * 0.0024;
      default:
        return 0;
    }
}
static convertStringToNumber(string: string): number {
    const number = Number(string);
    if (isNaN(number)) {
        return 0;
        }
    return number;
    }
}

export default ConvertFunction;
'use strict';
var __modulo = function(a, b) { return (a % b + +b) % b; };

angular.module('mm.iban', ['ng']).constant('countries', {
  AL: /^AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}$/,
  AD: /^AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}$/,
  AT: /^AT[0-9]{2}[0-9]{5}[0-9]{11}$/,
  AZ: /^AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}$/,
  BH: /^BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}$/,
  BE: /^BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}$/,
  BA: /^BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}$/,
  BR: /^BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z]{1}[A-Z0-9]{1}$/,
  BG: /^BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}$/,
  CR: /^CR[0-9]{2}[0-9]{3}[0-9]{14}$/,
  HR: /^HR[0-9]{2}[0-9]{7}[0-9]{10}$/,
  CY: /^CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}$/,
  CZ: /^CZ[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}$/,
  DK: /^DK[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/,
  DO: /^DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}$/,
  EE: /^EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}$/,
  FO: /^FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/,
  FI: /^FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}$/,
  FR: /^FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}$/,
  GE: /^GE[0-9]{2}[A-Z]{2}[0-9]{16}$/,
  DE: /^DE[0-9]{2}[0-9]{8}[0-9]{10}$/,
  GI: /^GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}$/,
  GR: /^GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}$/,
  GL: /^GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}$/,
  GT: /^GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HU: /^HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}$/,
  IS: /^IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}$/,
  IE: /^IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}$/,
  IL: /^IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}$/,
  IT: /^IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}$/,
  KZ: /^KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}$/,
  KW: /^KW[0-9]{2}[A-Z]{4}[A-Z0-9]{22}$/,
  LV: /^LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}$/,
  LB: /^LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}$/,
  LI: /^LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}$/,
  LT: /^LT[0-9]{2}[0-9]{5}[0-9]{11}$/,
  LU: /^LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}$/,
  MK: /^MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}$/,
  MT: /^MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$/,
  MR: /^MR[0-9]{2}[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}$/,
  MU: /^MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}$/,
  MD: /^MD[0-9]{2}[A-Z0-9]{20}$/,
  MC: /^MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}$/,
  ME: /^ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/,
  NL: /^NL[0-9]{2}[A-Z]{4}[0-9]{10}$/,
  NO: /^NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}$/,
  PK: /^PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}$/,
  PL: /^PL[0-9]{2}[0-9]{8}[0-9]{16}$/,
  PS: /^PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}$/,
  PT: /^PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}$/,
  QA: /^QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}$/,
  SM: /^SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}$/,
  SA: /^SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}$/,
  RS: /^RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/,
  SK: /^SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}$/,
  SI: /^SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}$/,
  ES: /^ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}$/,
  SE: /^SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}$/,
  CH: /^CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}$/,
  TN: /^TN[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}$/,
  TR: /^TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}$/,
  AE: /^AE[0-9]{2}[0-9]{3}[0-9]{16}$/,
  GB: /^GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}$/,
  VG: /^VG[0-9]{2}[A-Z]{4}[0-9]{16}$/
}).directive('ngIban', ['countries', function(countries) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      var isValidIban;
      isValidIban = function(value) {
        var A, Z, block, iban, remainder;
        A = 'A'.charCodeAt(0);
        Z = 'Z'.charCodeAt(0);
        iban = value.toUpperCase().replace(/\s/g, '');
        if (attrs.ngIban !== '' && (!!!(attrs.ngIban in countries) || !countries[attrs.ngIban].test(iban))) {
          return false;
        }
        iban = iban.substr(4) + iban.substr(0, 4);
        remainder = iban.split('').map(function(n) {
          var code;
          code = n.charCodeAt(0);
          if (code >= A && code <= Z) {
            return code - A + 10;
          } else {
            return n;
          }
        }).join('');
        while (remainder.length > 2) {
          block = remainder.slice(0, 9);
          remainder = __modulo(parseInt(block, 10), 97) + remainder.slice(block.length);
        }
        return __modulo(parseInt(remainder, 10), 97) === 1;
      };
      ctrl.$parsers.unshift(function(value) {
        var parsed, valid;
        valid = value != null ? isValidIban(value) : true;
        ctrl.$setValidity('iban', valid);
        if (valid) {
          parsed = value != null ? value.toUpperCase().replace(/\s/g, '') : void 0;
          if (parsed !== value) {
            ctrl.$setViewValue(parsed);
            ctrl.$render();
          }
          return parsed;
        } else {
          return void 0;
        }
      });
      return ctrl.$formatters.unshift(function(value) {
        var valid;
        valid = value != null ? isValidIban(value) : true;
        ctrl.$setValidity('iban', valid);
        return value;
      });
    }
  };
}]);

package com.example.Calculadora.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class CalculadoraController {
    @GetMapping("/api/calculadora/operar")
    public CalculadoraResponse operar(
            @RequestParam double num1,
            @RequestParam double num2,
            @RequestParam String operacion) {
            double resultado;
        switch (operacion) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                if (num2 == 0) {
                    throw new ArithmeticException("No es posible realizar una division con cero");
                }
                resultado = num1 / num2;
                break;
            default:
                throw new IllegalArgumentException("Operación no válida");
        }
        return new CalculadoraResponse(resultado);
    }
}

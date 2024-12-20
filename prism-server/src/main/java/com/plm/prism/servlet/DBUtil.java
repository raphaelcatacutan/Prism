package com.plm.prism.servlet;

import jakarta.servlet.ServletInputStream;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DBUtil {
    public static JSONObject parseBody(ServletInputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        StringBuilder requestBody = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            requestBody.append(line);
        }
        return new JSONObject(requestBody.toString());
    }
}

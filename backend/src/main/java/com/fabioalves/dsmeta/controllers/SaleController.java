package com.fabioalves.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fabioalves.dsmeta.entities.Sale;
import com.fabioalves.dsmeta.services.SaleService;



@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	@GetMapping
	public Page<Sale> findSales(
			@RequestParam(value = "minDate", defaultValue="")String mindate, 
			@RequestParam(value ="maxDate", defaultValue="")String maxdate,
			Pageable pageable){
		return service.findSales(mindate,maxdate,pageable);
	}
	}




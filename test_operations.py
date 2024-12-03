import operations

def test_add():
	assert operations.add(3, 4) == 7
	assert operations.add(4, 3) == 7

def test_substract():
	assert operations.substract(3, 4) == -1
	assert operations.substract(4, 3) == 1
